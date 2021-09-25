export default function GeneralInfo(props) {
  return (
    <form id='general_info'>
      <label htmlFor='lastName'>
        last name:
        <input
          name='lastName'
          type='text'
          id='lastName'
          value={props.data.generalInfo.lastName}
          onChange={props.onChange}
        ></input>
      </label>
      <label htmlFor='firstName'>
        first name:
        <input
          name='firstName'
          type='text'
          id='firstName'
          value={props.data.generalInfo.firstName}
          onChange={props.onChange}
        ></input>
      </label>
      <label htmlFor='email'>
        email:
        <input
          name='email'
          type='text'
          id='email'
          value={props.data.generalInfo.email}
          onChange={props.onChange}
        ></input>
      </label>
      <label htmlFor='phoneNumber'>
        phoneNumber:
        <input
          name='phoneNumber'
          type='text'
          id='phoneNumber'
          value={props.data.generalInfo.phoneNumber}
          onChange={props.onChange}
        ></input>
      </label>
    </form>
  );
}
