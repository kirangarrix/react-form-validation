
import  useForm  from "./useForm";

const SIgnupForm = ({submitForm}) => {
const {handleChange,formHandle,values,errors}=useForm(submitForm);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <form className="form-wrapper">
          <div className="name">
            <div className="label">Full-Name</div>
            <input className="input" type="text" name="fullname" value={values.fullname} onChange={handleChange} />
            {errors.fullname && <p className='error'>{errors.fullname}</p>}
          </div>

          <div className="email">
            <div className="label">Email</div>
            <input className="input" type="emai;" name="email" value={values.email}  onChange={handleChange} />
            {errors.email && <p className='error'>{errors.email}</p>}
          </div>

          <div className="password">
            <div className="label">Password</div>
            <input className="input" type="password" name="password" value={values.password} onChange={handleChange} />
            {errors.password && <p className='error'>{errors.password}</p>}
          </div>
          <div>
              <button className="submit" onClick={formHandle} >Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SIgnupForm;
