export default function Education(props) {
  return (
    <form id=''>
      <label className=''>
        Institution :
        <input
          id={props.index}
          className=''
          name='institution'
          type='text'
          value={props.data.institution}
          onChange={props.onChange}
        ></input>
      </label>
    </form>
  );
}
