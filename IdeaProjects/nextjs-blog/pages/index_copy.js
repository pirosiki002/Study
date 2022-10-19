import { CSVLink, CSVDownload } from "react-csv";

export default function Home() {

  const csvData = [
    ["firstname", "lastname", "email"],
    ["Pirosiki", "PiroPiro", "pirosiki@gmail.com"],
    ["太郎", "テスト", "test1@smthing.co.com"],
    ["二郎", "テキスト", "text1@cocococo.com"]
  ];

  return (
    <>
      こんにちは！CSVの出力テストをします！！！
      <CSVLink data={csvData}>Download me</CSVLink>
      {/* <CSVDownload data={csvData} target="_blank" /> */}
    </>
  );
}