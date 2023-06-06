import renderer from 'react-test-renderer';
import Button from '../components/Button';

function handleClick() {
  return 'message';
}

it('renders correctly', () => {
  const tree = renderer.create(
    <Button value="1" span="span-two" bg="bg-color" press={handleClick} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
