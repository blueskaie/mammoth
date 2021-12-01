import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import {
  load as _loadHistory,
  //loadGames as _loadGames,
  clear as _clearHistory,
  //searchFromTxId as _searchHistory,
} from "../../../../redux/actions/player";
import TxRow from "./TxRow";

import Modal from "../BaseModal";
import styled from "styled-components";
import { ReactComponent as CalenderIcon } from "../../../../assets/img/calender.svg";
import { IPreviousProps, IStoreState } from "../../../../interface/IComponents/IModals/IPrevious";

class PreviousModal extends Component<IPreviousProps> {
  state: { open: boolean; searchTxId: string; historyLoading: boolean } = {
    open: false,
    searchTxId: "",
    historyLoading: false,
  };

  componentDidUpdate(oldProps: any, { searchTxId: oldSearchTxId, open: oldOpen }: any): any {
    const { searchHistory, historyData }: { searchHistory: Function; historyData: [] } = this.props;
    const { searchTxId, open } = this.state;
    if (!oldOpen && open && historyData.length <= 15) {
      this.loadMore();
    }

    if (searchTxId.length && searchTxId !== oldSearchTxId) {
      searchHistory(searchTxId);
    }
  }

  get tableBody() {
    const { historyData }: { historyData: [] } = this.props;
    return historyData.map(
      (d: { game_id: number; result: string; winner_balance: number; winner_list: Array<any> }) => (
        <TxRow key={d.game_id} {...d} />
      )
    );
  }

  get content() {
    const { historyHasMore, search, currencyValue } = this.props;

    const { historyLoading, searchTxId } = this.state;

    if (searchTxId.length) {
      return (
        <StyledPreviousTable>
          <thead>
            <tr>
              <th className="text-left">Round</th>
              <th style={{ width: "100px" }} className="text-left">
                Result
              </th>
              <th className="text-left">My Pick</th>
              <th className="text-right">Payout (BSV)</th>
            </tr>
          </thead>
          {
            // @ts-ignore
            search.data.players &&
              // @ts-ignore
              search.data.players.map((d: any) => (
                <tbody>
                  <tr key={d.game_id}>
                    <td>
                      <b>{d.game_id}</b>
                    </td>
                    <td>{d.result}</td>
                    <td>
                      {d.area.side === "UP" ? ">" : "<"} {d.area.roll}
                    </td>
                    <td className="text-right">
                      {d.payout_txid_url ? (
                        <a href={d.payout_txid_url} target="_blank" rel="noopener noreferrer">
                          <b>{Math.max(d.payout, 0).toFixed(6)}</b>
                        </a>
                      ) : (
                        <b>{Math.max(d.payout, 0).toFixed(6)}</b>
                      )}
                    </td>
                  </tr>
                </tbody>
              ))
          }
        </StyledPreviousTable>
      );
    }

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadMore}
        hasMore={!historyLoading && historyHasMore}
        initialLoad={false}
        useWindow={false}
      >
        <StyledPreviousTable>
          <thead>
            <tr>
              <th className="text-left">Round</th>
              <th style={{ width: "100px" }} className="text-left">
                Result
              </th>
              <th className="text-right" style={{ width: "150px" }}>
                Total Prize ({currencyValue})
              </th>
              <th className="text-right">Detail</th>
            </tr>
          </thead>
          {this.tableBody}
        </StyledPreviousTable>
      </InfiniteScroll>
    );
  }

  setSearchTxId = (searchTxId: string) => {
    this.setState((state) => ({
      ...state,
      searchTxId,
    }));
  };

  loadMore = (page?: any) => {
    this.setState({ historyLoading: true });
    //loadGames,
    const { lastLoadedGameId } = this.props;
    // @ts-ignore
    const args: { offset: number; key: string; size: number } = { page };

    args.offset = lastLoadedGameId - 1;
    args.key = "data";
    args.size = 15;

    // loadGames(args).then(() => {
    //   this.setState({ historyLoading: false });
    // });
  };

  toggle = () => {
    this.setState((state: { open: boolean }) => ({
      ...state,
      open: !state.open,
    }));
  };

  render() {
    const { open, searchTxId } = this.state;
    const { btnClass } = this.props;

    return (
      <Fragment>
        <StyledBtn className={btnClass} type="button" onClick={this.toggle}>
          <CalenderIcon />
        </StyledBtn>
        <Modal open={open} onClose={this.toggle}>
          <p> Search TxID</p>
          <StyledSearchInput
            type="text"
            placeholder="TxID"
            onChange={(e: { target: { value: string } }) => this.setSearchTxId(e.target.value)}
            value={searchTxId}
          />
          {this.content}
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  oldGame: state.info.oldGame,
  game: state.info.game,
  historyHasMore: state.player.hasMore,
  historyData: state.player.data,
  // eslint-disable-next-line camelcase
  lastLoadedGameId: state.player.data[state.player.data.length - 1]?.game_id || 0,
  search: state.player.search,
});

export default connect(mapStateToProps, {
  loadHistory: _loadHistory,
  clearHistory: _clearHistory,
  // loadGames: _loadGames,
  // searchHistory: _searchHistory,
})(PreviousModal);

const StyledBtn = styled.button`
  &.toolbar-btn {
    appearance: none;
    opacity: 0.6;
    margin-left: 16px;
    height: 24px;
    width: 24px;
    padding: 0;

    &:not(.btn-sound):hover {
      opacity: 1;
      transition: opacity 0.5s;
    }

    &-sound {
      opacity: 0.5;

      &.active {
        background: #593781;
        border-radius: 100%;
        opacity: 1 !important;
      }
    }
  }
`;

const StyledPreviousTable: any = styled.table`
  tbody {
    max-height: 38px;

    &:nth-child(2n) {
      background: #f2f8f7;
    }

    tr {
      height: 31px;
    }

    &.expanded {
      max-height: 200px;
      transition: max-height 0.3s;
    }
  }

  th {
    color: #8b8e8d;
    font-size: 11px;
    font-weight: 400;
    font-family: "Mulish", sans-serif;
    font-style: normal;
    text-align: left;
    width: auto;
  }

  td {
    color: #fff;
    font-size: 12px;
    padding: 0 16px;
    height: 38px;

    a {
      color: #fff;
    }
  }

  .details-btn {
    height: 24px;
    width: 24px;
    transition: transform 0.1s;

    &.rotate {
      transform: rotate(180deg);
    }
  }

  .subheader {
    height: 16px;

    th {
      height: 16px;
      padding: 8px 16px 0;
    }
  }
`;
const StyledSearchInput = styled.input`
  height: 42px;
  line-height: 22px;
  padding: 14px 24px;
  border-radius: 8px;
  border: 1px transparent;
  background: linear-gradient(0deg, #ecf5f4, #ecf5f4);
  opacity: 0.7;
  color: #fff;
  width: 100%;
  margin-bottom: 27px;

  &::placeholder {
    color: #242424;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
  }
`;
