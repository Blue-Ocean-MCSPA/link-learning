function Form({ setData, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-bold text-lg text-black mt-8">
        Add new Instructor's Information
      </h3>
      <div className="modal-action flex-col items-center">
        <label htmlFor="1">First Name</label>
        <input
          id="1"
          type="text"
          placeholder="type here..."
          className="input input-bordered w-full max-full m-6"
          onChange={(e) => setData(e.target.value)}
        />
        <label htmlFor="2">Last Name</label>
        <input
          id="2"
          type="text"
          placeholder="type here..."
          className="input input-bordered w-full max-full m-6"
          onChange={(e) => setData(e.target.value)}
        />
        <label htmlFor="3">Email</label>
        <input
          id="3"
          type="text"
          placeholder="type here..."
          className="input input-bordered w-full max-full m-6"
          onChange={(e) => setData(e.target.value)}
        />

        <buttton type="submit" className="btn" onClick={handleSubmit}>
          Add
        </buttton>
      </div>
    </form>
  );
}

export default Form;
