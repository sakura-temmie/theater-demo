const EditSentence = ({text}) => {
  return (
    <>
      <textarea className="w-full m-3 p-2 shadow-md text-base h-full" defaultValue={text} />
    </>
  );
}

export default EditSentence
