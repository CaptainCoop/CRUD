"use client";

import Filter from "@/components/Filter/Filter";
import Spinner from "@/components/Spinner/Spinner";
import Table from "@/components/Table/Table";
import { useEffect, useState } from "react";

export default function Home() {
  const [originalList, setOriginalList] = useState([]);
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>({});

  useEffect(() => {
    setIsLoading(true);

    fetch("https://api.artic.edu/api/v1/artworks?page=1&limit=20")
      .then((response) => response.json())
      .then((result) => {
        setOriginalList(result.data);
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

  const handleInputFilter = (value: string) => {
    if (value) {
      setList(
        originalList.filter((item: any) =>
          item.artist_title.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setList(originalList);
    }
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-start w-5/6 py-10">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <div className="flex justify-center w-full py-10">
                <Filter inputFilter={handleInputFilter} />
              </div>
              <div className="border-2 border-black rounded-t-xl">
                <Table
                  list={list}
                  selectRow={handleRowClick}
                  selectedRow={selectedRow}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
