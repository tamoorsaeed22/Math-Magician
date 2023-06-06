import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

it('renders calculator correctly', () => {
  const tree = renderer.create(
    <Calculator />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
