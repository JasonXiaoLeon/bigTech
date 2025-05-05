import crypto from 'crypto'

const algorithm = 'aes-256-cbc'
const key = Buffer.from(process.env.BALANCE_ENCRYPTION_KEY!, 'hex') // 32字节密钥

// 解密函数
export const decrypt = (encrypted: string): string => {
  try {
    const [ivBase64, encryptedBase64] = encrypted.split(':')

    if (!ivBase64 || !encryptedBase64) {
      throw new Error('Invalid encrypted string format.')
    }

    const iv = Buffer.from(ivBase64, 'base64')
    const encryptedText = Buffer.from(encryptedBase64, 'base64')

    if (key.length !== 32) {
      throw new Error('Invalid encryption key length.')
    }

    const decipher = crypto.createDecipheriv(algorithm, key, iv)
    const decrypted = Buffer.concat([
      decipher.update(encryptedText),
      decipher.final(),
    ])

    return decrypted.toString('utf8')
  } catch (err) {
    console.error('Decryption error:', err)
    throw new Error('Failed to decrypt data.')
  }
}
