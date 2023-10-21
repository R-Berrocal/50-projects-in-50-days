export const Form = () => {
  return (
    <form>
      <div className="form-control">
        <input type="text" required />
        <label>
          {'Email'.split('').map((letter, index) => (
            <span style={{ transitionDelay: `${index * 50}ms` }} key={index}>
              {letter}
            </span>
          ))}
        </label>
      </div>
      <div className="form-control">
        <input type="password" required />
        <label>
          {'Password'.split('').map((letter, index) => (
            <span style={{ transitionDelay: `${index * 50}ms` }} key={index}>
              {letter}
            </span>
          ))}
        </label>
      </div>

      <button className="btn">Login</button>

      <p className="text">
        Don´t have an account? <a href="#">Register</a>
      </p>
    </form>
  );
};
