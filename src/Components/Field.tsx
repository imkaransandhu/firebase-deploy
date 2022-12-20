type inputFieldProps = {
  inputName: string,
  phText: string,
  ciType: string,
  fs: any
}

const Field = ({ inputName, phText, fs, ciType }: inputFieldProps) => {
  return (
    <div>
      <div className=" lg:w-1/2 w-full mx-auto relative">
        <label className="absolute left-2 top-0 bottom-0 my-auto h-auto" htmlFor={inputName}>{inputName}:</label>
        <input type={ciType} onChange={fs} name={inputName} className="w-full border-2 border-black pl-24" placeholder={phText} />
      </div>
    </div>
  );
};

export default Field;