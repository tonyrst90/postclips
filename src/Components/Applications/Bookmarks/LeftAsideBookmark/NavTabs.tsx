import React, { useCallback, useState } from 'react'
import { Button, Nav, NavItem } from 'reactstrap'
import { Bookmark, PlusCircle } from 'react-feather';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { StateType } from '@/Types/Bookmark.type';
import { updateActiveTabs } from '@/Redux/Reducers/BookmarkSlice';
import NewBookmarkModal from '../BookmarkModals/NewBookmarkModal';
import { Href } from '@/Constant';
import TagModal from '../BookmarkModals/TagModal';
import { bookmarkTagsNav, bookmarkViewsNav } from '@/Data/Applications/Bookmarks';

const NavTabs = () => {
    const dispatch = useAppDispatch();
    const [state, setState] = useState<StateType>({ addModal: false, tagModal: false });
    const { activeTabs } = useAppSelector((state) => state.bookmark);
    const onClickHandle = (id: string) => {
        dispatch(updateActiveTabs(id));
    };
    const modalToggle = (modalName: keyof StateType) => {
        setState((prevState) => ({
            ...prevState,
            [modalName]: !prevState[modalName],
        }));
    };
    const addToggleCallback = useCallback((toggle: boolean) => {
        setState((prevState) => ({
            ...prevState,
            addModal: toggle,
        }));
    }, []);

    return (
        <Nav className="main-menu">
            <NavItem>
                <Button color='transparent' block className="badge-light-primary btn-mail txt-primary w-100" onClick={() => modalToggle('addModal')}><Bookmark className="me-2" />{'New Bookmark'}</Button>
                <NewBookmarkModal showModal={state.addModal} modalToggle={() => modalToggle('addModal')} addCallback={addToggleCallback} />
            </NavItem>
            <NavItem><span className="main-title">{'Views'}</span></NavItem>
            {bookmarkViewsNav.map((item) => (
                <li key={item.id}>
                    <a href={Href} className={activeTabs === item.id ? 'show ' : ''} onClick={() => onClickHandle(item.id)}><span className="title">{item.title}</span></a>
                </li>
            ))}
            <li><hr /></li>
            <li>
                <span className="main-title"> {'Tags'}
                    <span className="pull-right"><a href={Href} onClick={() => modalToggle('tagModal')}><PlusCircle /></a></span>
                </span>
                <TagModal showModal={state.tagModal} modalToggle={() => modalToggle('tagModal')} />
            </li>
            {bookmarkTagsNav.map((item) => (
                <li key={item.id}>
                    <a href={Href} className={activeTabs === item.id ? 'show' : ''} onClick={() => onClickHandle(item.id)}><span className="title">{item.title}</span></a>
                </li>
            ))}
        </Nav>
    )
}
export default NavTabs;