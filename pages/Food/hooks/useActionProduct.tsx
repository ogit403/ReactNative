import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { isActive } from '../helpers';
import { favoriteActions } from '../store/slices/favorite';
import { viewActions } from '../store/slices/view';

const useActionProduct = (id: string) => {
    const dispatch = useDispatch();
    const favorite = useSelector((state: RootState) => state.favorite.items);
    const view = useSelector((state: RootState) => state.view.items);


    const isFavoriteActive = isActive(favorite, id);
    const isViewActive = isActive(view, id);

    const handleAction = (key: 'favorite' | 'seen', idProd = '') => {
        key === 'favorite' ?
            dispatch(favoriteActions.addProductInView(idProd || id)) :
            dispatch(viewActions.addProductInView(idProd || id));
    }

    const deleteAction = (key: 'favorite' | 'seen', idProd = '') => {
        key === 'favorite' ?
                dispatch(favoriteActions.addProductInView(idProd || id)) :
                dispatch(viewActions.deleteView(idProd || id));
    }

    const deleteAllAction = (key: 'favorite' | 'seen') => {
        key === 'favorite' ? dispatch(favoriteActions.clearAllView()) : dispatch(viewActions.clearAllView())
    }

    return {
        isFavoriteActive,
        isViewActive,
        handleAction,
        deleteAction,
        deleteAllAction,
        favorite,
        view,
    }
}

export default useActionProduct