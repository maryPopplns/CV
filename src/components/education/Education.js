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
      <label className=''>
        Degree :
        <input
          id={props.index}
          className=''
          name='degree'
          type='text'
          value={props.data.degree}
          onChange={props.onChange}
        ></input>
      </label>
      <label className=''>
        Start :
        <input
          id={props.index}
          className=''
          name='start'
          type='text'
          value={props.data.start}
          onChange={props.onChange}
        ></input>
      </label>
      <label className=''>
        End :
        <input
          id={props.index}
          className=''
          name='end'
          type='text'
          value={props.data.end}
          onChange={props.onChange}
        ></input>
      </label>
    </form>
  );
}
