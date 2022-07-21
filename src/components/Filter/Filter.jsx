import { Label, Input } from './Filter.styled';

const Filter = ({value,onChange}) => (
  <>
    <Label>
      Find Contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  </>
);

export default Filter;
