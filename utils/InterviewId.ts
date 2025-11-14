import { randomBytes } from "crypto";

const ALPHANUM = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SUFFIX_LENGTH = 5;

export function interviewId(): string {
  const bytes = randomBytes(SUFFIX_LENGTH);
  let suffix = "";
  for (let i = 0; i < SUFFIX_LENGTH; i++) {
    suffix += ALPHANUM[bytes[i] % ALPHANUM.length];
  }
  return `INT${suffix}`;
}

export default interviewId;
