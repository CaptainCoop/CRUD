interface Props {
  list: Array<any>;
  selectedRow: any;
  selectRow: (row: any) => void;
}

export default function Table({ list, selectedRow, selectRow }: Props) {
  return (
    <>
      <table className="table-fixed w-full">
        <thead className="rounded-t-xl border-b-2 border-b-black text-gray-50">
          <tr>
            <td className="text-xl font-bold p-4">Artist</td>
            <td className="text-xl font-bold">Artwork title</td>
            <td className="text-xl font-bold">Style</td>
            <td />
          </tr>
        </thead>
        <tbody className="w-full space-y-4">
          {list.map((item: any, index) => {
            return (
              <>
                <tr
                  key={index}
                  onClick={() => selectRow(item)}
                  className="border-b border-b-1 cursor-pointer hover:bg-slate-600 hover:text-white"
                >
                  <td className="p-4">
                    {item.artist_title
                      ? item.artist_title
                      : item.department_title}
                  </td>
                  <td className="p-4">{item.title}</td>
                  <td className="p-4">{item.artwork_type_title}</td>
                </tr>
                {selectedRow.id === item.id && (
                  <tr key={item.id}>
                    <th />
                    <th className="text-left py-6">
                      Dimessions:{" "}
                      <span className="italic">{selectedRow.dimensions}</span>
                    </th>
                  </tr>
                )}
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
