import Papa from "papaparse";

export interface CleanResult {
  fileName: string;
  rows: number;
  duplicates: number;
  errorsFixed: number;
  cleanedCsv: string;
}

export function cleanCsv(fileName: string, csvText: string): CleanResult {
  const { data, errors } = Papa.parse<Record<string, string>>(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  const seen = new Set<string>();
  let duplicates = 0;
  const uniqueRows: Record<string, string>[] = [];

  for (const row of data) {
    const key = JSON.stringify(row);
    if (seen.has(key)) {
      duplicates++;
    } else {
      seen.add(key);
      uniqueRows.push(row);
    }
  }

  const cleanedCsv = Papa.unparse(uniqueRows);

  return {
    fileName,
    rows: data.length,
    duplicates,
    errorsFixed: errors.length,
    cleanedCsv,
  };
}