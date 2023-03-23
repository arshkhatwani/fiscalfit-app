export default function convertToDepositBody(deposit: number, pid: string) {
  return { deposit, pid };
}
