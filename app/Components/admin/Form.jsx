function Form({ data, handleSubmit, onChange, handleAddInstructor }) {
  return (
    <form onSubmit={(e) => handleSubmit(e, handleAddInstructor)}>
      <h3 className="font-bold text-lg text-black mt-8">
        Add new Instructor's Information
      </h3>
      <div className="modal-action flex-col text-sm text-light-foreground bg-light-background border border-b-1 border-light-inactive_selection">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          placeholder="First Name here..."
          className="m-2 px-2 bg-light-background border border-1 border-light-foreground rounded-full"
          onChange={onChange}
          value={data.firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          placeholder="Last Name here..."
          className="m-2 px-2 bg-light-background border border-1 border-light-foreground rounded-full"
          onChange={onChange}
          value={data.lastName}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Email here..."
          className="m-2 px-2 bg-light-background border border-1 border-light-foreground rounded-full"
          onChange={onChange}
          value={data.email}
        />
        <label htmlFor="email">Tempory Password</label>
        <input
          id="password"
          type="text"
          placeholder="Temp Password here..."
          className="m-2 px-2 bg-light-background border border-1 border-light-foreground rounded-full"
          onChange={onChange}
          value={data.password}
        />

        <button
          type="submit"
          className="btn mt-12"
          //   onClick={(handleSubmit, handleAddInstructor)}
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
