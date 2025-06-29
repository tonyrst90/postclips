import { Href } from '@/Constant'
import { searchNavData } from '@/Data/Applications/SearchResult'
import { SearchNavProps } from '@/Types/SearchResult.type'
import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

const SearchNav: React.FC<SearchNavProps> = ({ activeTab, setActiveTab }) => {
    return (
        <div className="text-center">
            <Nav className="search-list" tabs>
                {searchNavData.map((nav) => (
                    <NavItem key={nav.id} className={`bg-light-${nav.color}`}>
                        <NavLink href={Href} className={`${nav.id !== 1 ? `txt-${nav.color}` : ''} ${activeTab === nav.id ? 'active' : ''}`} onClick={() => setActiveTab(nav.id)}>
                            {nav.icon ? <i className={`icon-${nav.icon}`} /> : ''}{nav.text}
                        </NavLink>
                    </NavItem>
                ))}
            </Nav>
        </div>
    )
}
export default SearchNav