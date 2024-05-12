import { AddModal, Table, Title } from 'components'
import Container from 'container/Container'
import Content from 'content/Content'
import { useGetGlobalState } from 'hooks/useGetGlobalState';
import { useState } from 'react';
import { RootState } from 'typescript/types/RootState';
import ReactPaginate from "react-paginate";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import "./ReactPaginate.scss";

const Customers = (): JSX.Element => {
	const { users } = useGetGlobalState((state: RootState) => state.usersSlice);

    const [pageNumber, setPageNumber] = useState(0);

    const productsPerPage = 6;
    const currentUser = pageNumber * productsPerPage;

    const displayUsers = users.slice(
        currentUser,
        currentUser + productsPerPage
    );

    const pageCount = Math.ceil(users.length / productsPerPage);
    const changePage = ({ selected }: any) => {
        setPageNumber(selected);
    };

    return (
    	<Container>
			<Title title="Customers" />
			<AddModal/>
			<Content>
				<Table 
					displayUsers={displayUsers}
				/>
				{
					users.length !== 0 ? (
						<ReactPaginate
							previousLabel={<BsArrowLeft/>}
							nextLabel={<BsArrowRight/>}
							breakLabel="..."
							pageCount={pageCount}
							onPageChange={changePage}
							containerClassName="paginationBtn"
							previousLinkClassName="prevBtn"
							nextLinkClassName="nextBtn"
							nextClassName="nextBtn"
							previousClassName="prevBtn"
							disabledClassName="paginationDisabled"
							activeClassName="paginationActive"
						/>
					) : null
				}
			</Content>
		</Container>
    )
}

export default Customers