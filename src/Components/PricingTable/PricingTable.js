import React from 'react';
import { Link } from 'react-router-dom';
import './PricingTable.css';

const PricingTable = () => {
  return (
    <div className='table-responsive'>
      <table>
        <colgroup></colgroup>
        <colgroup></colgroup>
        <colgroup></colgroup>
        <colgroup></colgroup>

        <thead>
          <tr>
            <th>
              <h4
                style={{ marginTop: '-3rem', paddingBottom: '3rem' }}
                className='display-3 text-center text-white'
              >
                Course Plan
              </h4>
            </th>
            <th>
              <h2>Premium</h2>
              <p>$ 89.95</p>
            </th>
            <th>
              <h2>Plus</h2>
              <p>$ 49.95</p>
              <p class='promo'>Our most valuable package!</p>
            </th>
            <th>
              <h2>Basic</h2>
              <p>$ 19.95</p>
            </th>
          </tr>
        </thead>

        <tfoot>
          <tr>
            <th>&nbsp;</th>
            <td>
              <Link to='#'>Start a free trial</Link>
            </td>
            <td>
              <Link to='#'>Start a free trial</Link>
            </td>

            <td>
              <Link to='#'>Start a free trial</Link>
            </td>
          </tr>
        </tfoot>

        <tbody>
          <tr>
            <th>
              Feature "Cras mattis"{' '}
              <span>
                Cras mattis consectetur purus sit amet fermentum. Vivamus
                sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
              </span>
            </th>
            <td>Lorem ipsum dolor sit amet</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>Lorem ipsum dolor sit amet</td>
          </tr>
          <tr>
            <th>
              Feature "Donec ullamcorper"{' '}
              <span>
                Donec ullamcorper nulla non metus auctor fringilla. Etiam porta
                sem malesuada magna mollis euismod.
              </span>
            </th>
            <td>Lorem ipsum dolor sit amet</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>Lorem ipsum dolor sit amet</td>
          </tr>
          <tr>
            <th>
              Feature "Lorem ipsum"{' '}
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </span>
            </th>
            <td>Lorem ipsum dolor sit amet</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>&mdash;</td>
          </tr>
          <tr>
            <th>
              Feature "Lorem ipsum"{' '}
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </th>
            <td>Lorem ipsum dolor sit amet</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>&mdash;</td>
          </tr>
          <tr>
            <th>
              Feature "Lorem ipsum"{' '}
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </th>
            <td>Lorem ipsum dolor sit amet</td>
            <td>&mdash;</td>
            <td>&mdash;</td>
          </tr>
          <tr>
            <th>
              Feature "Lorem ipsum"{' '}
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </th>
            <td>Lorem ipsum dolor sit amet</td>
            <td>&mdash;</td>
            <td>&mdash;</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
