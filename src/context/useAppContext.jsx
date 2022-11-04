import { useContext } from 'react';
import { Context } from './Context';

function useAppContext() {
	return useContext(Context);
}

export default useAppContext;
