'use client'

import { useState, useMemo, useEffect, SetStateAction } from "react";
import Paginator from "../../Paginator/Paginator";

type SortDirection = 'asc' | 'desc';

interface SortConfig {
  key: string;
  direction: SortDirection;
}

export default function AdminUserTable({ users, email }: { users: any[]; email: string }) {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUsers, setEditedUsers] = useState<any[]>([]);
  const [currentUserPermissionLevel, setCurrentUserPermissionLevel] = useState<number>(0);

  // 👉 分页相关状态
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/auth/user?email=${email}`);
        if (!res.ok) throw new Error('Failed to fetch user data');
        const data = await res.json();

        if (data?.permissionLevel > 7 && data?.permissionLevel <= 9) {
          setPermissionDenied(false);
          setCurrentUserPermissionLevel(data.permissionLevel);
        } else {
          setPermissionDenied(true);
        }
      } catch (err) {
        console.error(err);
        setPermissionDenied(true);
      }
    };

    if (email) {
      fetchUser();
    }
  }, [email]);

  useEffect(() => {
    setEditedUsers(users.map(u => ({ ...u })));
  }, [users]);

  const validateUser = (user: any) => {
    const errors: string[] = [];
    const gender = user.gender?.toLowerCase();
    if (!['male', 'female', 'other'].includes(gender)) {
      errors.push(`Invalid gender for ${user.email} (must be "male", "female" or "other")`);
    }
    if (isNaN(user.age) || user.age < 1) {
      errors.push(`Invalid age for ${user.email} (must be >= 1)`);
    }
    if (
      isNaN(user.permissionLevel) ||
      user.permissionLevel < 1 ||
      user.permissionLevel >= currentUserPermissionLevel
    ) {
      errors.push(
        `Invalid permissionLevel for ${user.email} (must be between 1 and ${currentUserPermissionLevel - 1})`
      );
    }
    return errors;
  };

  const handleSave = async () => {
    const allErrors = editedUsers.flatMap(validateUser);
    if (allErrors.length > 0) {
      alert(allErrors.join('\n'));
      return;
    }

    try {
      const res = await fetch('/api/auth/user/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedUsers),
      });
      if (!res.ok) throw new Error('Failed to update users');
      alert('Users updated successfully');
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      alert('Failed to update users');
    }
  };

  const filteredAndSortedUsers = useMemo(() => {
    let filtered = editedUsers;
    if (searchTerm.trim() !== "") {
      const lowerTerm = searchTerm.toLowerCase();
      filtered = filtered.filter((user) =>
        user.email?.toLowerCase().includes(lowerTerm)
      );
    }
    if (!sortConfig) return filtered;
    return [...filtered].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [editedUsers, sortConfig, searchTerm]);

  // 分页后的用户
  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * usersPerPage;
    return filteredAndSortedUsers.slice(startIndex, startIndex + usersPerPage);
  }, [filteredAndSortedUsers, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedUsers.length / usersPerPage);

  const handleSort = (key: string) => {
    if (sortConfig?.key === key) {
      setSortConfig({
        key,
        direction: sortConfig.direction === 'asc' ? 'desc' : 'asc',
      });
    } else {
      setSortConfig({ key, direction: 'desc' });
    }
  };

  const handleInputChange = (id: string, field: string, value: string | number) => {
    setEditedUsers(prev =>
      prev.map(user =>
        user._id === id ? { ...user, [field]: value } : user
      )
    );
  };

  const ArrowIcon = ({ direction }: { direction: SortDirection }) =>
    direction === 'asc' ? (
      <svg viewBox="0 0 1024 1024" width="16" height="16" className="inline-block ml-1">
        <path d="M512 384l320 320H192z" fill="#666" />
      </svg>
    ) : (
      <svg viewBox="0 0 1024 1024" width="16" height="16" className="inline-block ml-1">
        <path d="M512 640L192 320h640z" fill="#666" />
      </svg>
    );

  const renderHeader = (key: string, label: string) => (
    <th
      className="border p-2 cursor-pointer select-none"
      onClick={() => handleSort(key)}
    >
      {label}
      <ArrowIcon direction={sortConfig?.key === key ? sortConfig.direction : 'desc'} />
    </th>
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  if (permissionDenied) {
    return (
      <div className="text-center text-red-500">
        You do not have permission to view this content.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <div className="mb-2 flex gap-2">
        <input
          type="text"
          placeholder="Search email..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // 搜索时回到第一页
          }}
          className="border px-3 py-1 rounded w-full sm:w-64 text-sm"
        />
        <button
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          className="border px-3 py-1 rounded bg-blue-500 text-white text-sm"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-300 text-sm">
        <thead>
          <tr>
            {renderHeader('email', 'Email')}
            {renderHeader('gender', 'Gender')}
            {renderHeader('age', 'Age')}
            {renderHeader('permissionLevel', 'Permission')}
            {renderHeader('createdAt', 'Created At')}
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user) => (
            <tr key={user._id.toString()}>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">
                {isEditing ? (
                  <select
                    value={user.gender}
                    onChange={(e) => handleInputChange(user._id, 'gender', e.target.value)}
                    className="border px-1 py-0.5 rounded w-full"
                  >
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                  </select>
                ) : user.gender}
              </td>
              <td className="border p-2">
                {isEditing ? (
                  <input
                    type="number"
                    min={1}
                    value={user.age}
                    onChange={(e) => handleInputChange(user._id, 'age', Number(e.target.value))}
                    className="border px-1 py-0.5 rounded w-full"
                  />
                ) : user.age}
              </td>
              <td className="border p-2">
                {isEditing ? (
                  <input
                    type="number"
                    min={1}
                    max={currentUserPermissionLevel - 1}
                    value={user.permissionLevel}
                    onChange={(e) =>
                      handleInputChange(user._id, 'permissionLevel', Number(e.target.value))
                    }
                    className="border px-1 py-0.5 rounded w-full"
                  />
                ) : user.permissionLevel}
              </td>
              <td className="border p-2">
                {formatDate(user.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page: SetStateAction<number>) => setCurrentPage(page)}
      />
    </div>
  );
}
