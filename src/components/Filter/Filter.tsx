interface Props {
  inputFilter: (value: any) => void;
}
export default function Filter({ inputFilter }: Props) {

  const handleInput = (element: any) => {
    inputFilter(element.target.value)
  };

  return (
    <div>
      <input type="text" onInput={handleInput} placeholder="Search by artist name..." className="rounded-lg shadow p-4 custom-imput" />
    </div>
  );
}
