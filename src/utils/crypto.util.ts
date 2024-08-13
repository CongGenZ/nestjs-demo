/* eslint-disable no-unused-vars */
import * as CryptoJS from 'crypto-js';
/* eslint-enable no-unused-vars */

// Khóa bí mật - Thay đổi cho phù hợp với yêu cầu bảo mật của bạn
const secretKey = 'your-secret-key';
// Mã hóa ID
export function encryptId(id: string): string {
  return CryptoJS.AES.encrypt(id, secretKey).toString();
}
// Giải mã ID
export function decryptId(encryptedId: string): string {
  const bytes = CryptoJS.AES.decrypt(encryptedId, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}
