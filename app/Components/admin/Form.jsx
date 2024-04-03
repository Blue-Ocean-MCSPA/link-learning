function Form({ data, handleSubmit, onChange, handleAddInstructor }) {
  return (
    <form onSubmit={(e) => handleSubmit(e, handleAddInstructor)}>
      <h3 className="font-bold text-lg text-black mt-8">
        Add new Instructor's Information
      </h3>
      <div className="modal-action flex-col items-center">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          placeholder="First Name here..."
          className="input input-bordered w-full max-full m-6"
          onChange={onChange}
          value={data.firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          placeholder="Last Name here..."
          className="input input-bordered w-full max-full m-6"
          onChange={onChange}
          value={data.LastName}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Email here..."
          className="input input-bordered w-full max-full m-6"
          onChange={onChange}
          value={data.email}
        />

        <button
          type="submit"
          className="btn"
          //   onClick={(handleSubmit, handleAddInstructor)}
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
