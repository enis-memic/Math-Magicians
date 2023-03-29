import renderer from 'react-test-renderer';
import Quotes from './Quotes';

it('Qoute page is working', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
