import { AAPLurl , MSFTurl ,TSLAurl ,AMZNurl ,METAurl} from "../content";
import Showstockdata from "./Showstockdata";

const Handeldate = () => {    
  return (
    <>
    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                Stocks
                </th>
                <th scope="col" className="px-6 py-3">
                    result
                </th>
            </tr>
        </thead>
        <tbody>
        <tr>
                <th scope="col" className="px-6 py-3">
                APLL
                </th>
                <th scope="col" className="px-6 py-3">
                  <Showstockdata urltoFatch={AAPLurl} />
                </th>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                MSFT
                </th>
                <td className="px-6 py-4">
                <Showstockdata urltoFatch={MSFTurl} />
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                TSLA
                </th>
                <td className="px-6 py-4">
                <Showstockdata urltoFatch={TSLAurl} />
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                AMZN
                </th>
                <td className="px-6 py-4">
                <Showstockdata urltoFatch={AMZNurl} />
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                META
                </th>
                <td className="px-6 py-4">
                <Showstockdata urltoFatch={METAurl} />
                </td>
            </tr>
        </tbody>
    </table>
</div>
    </>
  )
}

export default Handeldate