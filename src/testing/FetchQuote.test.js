import renderer from 'react-test-renderer';
import FetchQuote from '../components/FetchQuote';

it('renders quote correctly', () => {
  const tree = renderer.create(
    <FetchQuote />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
