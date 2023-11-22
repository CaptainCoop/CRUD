"use client";

import Spinner from "@/components/Spinner/Spinner";
import Table from "@/components/Table/Table";
import { useEffect, useState } from "react";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>({});

  useEffect(() => {
    setIsLoading(true);

    fetch("https://api.artic.edu/api/v1/artworks?page=1&limit=20")
      .then((response) => response.json())
      .then((result) => {
        setList(result.data);
        setIsLoading(false);
      });
  }, []);

  const handleRowClick = (row: any) => {
    if (row.id === selectedRow.id) {
      setSelectedRow({});
    } else {
      setSelectedRow(row);
    }
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center items-center py-6">
        <div className="flex flex-col items-start w-5/6 border-2 border-black rounded-t-xl">
          {isLoading ? (
            <Spinner />
          ) : (
            <Table list={list} selectRow={handleRowClick} selectedRow={selectedRow} />
          )}
        </div>
      </div>
    </div>
  );
}
