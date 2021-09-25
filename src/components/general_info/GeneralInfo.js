import './GeneralInfo.css';

export default function GeneralInfo(props) {
  return (
    <form id='general_info_form'>
      <label className='general_info_label' htmlFor='lastName'>
        last name:
        <input
          className='general_info_input'
          name='lastName'
          type='text'
          id='lastName'
          value={props.data.generalInfo.lastName}
          onChange={props.onChange}
        ></input>
      </label>
      <label className='general_info_label' htmlFor='firstName'>
        first name:
        <input
          className='general_info_input'
          name='firstName'
          type='text'
          id='firstName'
          value={props.data.generalInfo.firstName}
          onChange={props.onChange}
        ></input>
      </label>
      <label className='general_info_label' htmlFor='email'>
        email:
        <input
          className='general_info_input'
          type='email'
          name='email'
          id='email'
          required
          value={props.data.generalInfo.email}
          onChange={props.onChange}
        ></input>
      </label>
      <label className='general_info_label' htmlFor='phoneNumber'>
        phoneNumber:
        <input
          className='general_info_input'
          name='phoneNumber'
          type='tel'
          id='phoneNumber'
          value={props.data.generalInfo.phoneNumber}
          onChange={props.onChange}
        ></input>
      </label>
    </form>
  );
}
