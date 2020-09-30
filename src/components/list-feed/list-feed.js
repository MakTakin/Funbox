import React, {useState} from "react";
import Feed from "../feed/feed";
import styled from 'styled-components'

const ListFeedDiv = styled.div`
    margin:auto 0;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const ListFeed = () => {
    const [feeds, setFeeds] = useState([
        {
            header: {
                default: 'Cказочное заморское яство',
                selected: 'Котэ не одобряет?'
            },
            name: 'Нямушка',
            taste: 'с фуа-гра',
            portion: '10 порций',
            present: 'мышь в подарок',
            client: null,
            disabled: false,
            size: '0,5',
            selectedHeader: false,
            selected: false,
            caption: {
                default: 'Чего сидишь? Порадуй котэ, <button>купи.</button>',
                selected: 'Печень утки разварная с артишоками.',
                ended: 'Печалька c фуа-гра закончился.'
            },
            id: 1
        },
        {
            header: {
                default: 'Cказочное заморское яство',
                selected: 'Котэ не одобряет?'
            },
            name: 'Нямушка',
            taste: 'с рыбой',
            portion: '20 порций',
            present: '2 мыши в подарок',
            client: null,
            disabled: false,
            size: '2',
            selectedHeader: false,
            selected: true,
            caption: {
                default: 'Чего сидишь? Порадуй котэ, <button>купи.</button>',
                selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
                ended: 'Печалька c рыбой закончился.'
            },
            id: 2
        },
        {
            header: {
                default: 'Cказочное заморское яство',
                selected: 'Котэ не одобряет?'
            },
            name: 'Нямушка',
            taste: 'с курой',
            portion: '100 порций',
            present: '5 мышей в подарок',
            client: 'Заказчик доволен',
            disabled: true,
            size: '5',
            selectedHeader: false,
            selected: false,
            caption: {
                default: 'Чего сидишь? Порадуй котэ, <button>купи.</button>',
                selected: 'Филе из цыплят с трюфелями в бульоне.',
                ended: 'Печалька c курой закончился.'
            },
            id: 3
        }

    ])

    const selectFeed = (id) => {
        const feed = [...feeds]
        const feedSelect = feed.map(item => {
                const opts = {
                    selectedHeader: false,
                    selected: !item.selected
                }
                return (item.id == id ? {...item, ...opts} : item)
            }
        )
        setFeeds(feedSelect)
    }

    const selectFeedEnter = (id) => {
        if (!feeds[id - 1].selected) {
            return
        }
        const feed = [...feeds]
        feed.map(item => item.id == id && item.selectedHeader == false  ? item.selectedHeader = true : item)
        setFeeds(feed)
    }

    const selectFeedLeave = (id) => {
        if (!feeds[id - 1].selected) {
            return
        }
        const feed = [...feeds]
        feed.map(item => item.id == id && item.selectedHeader == true ? item.selectedHeader = false : item)
        setFeeds(feed)
    }

    const ListFeeds = feeds.map(feed => <Feed selectFeed={selectFeed}
                                              selectFeedLeave={selectFeedLeave}
                                              selectFeedEnter={selectFeedEnter}
                                              feed={feed}
                                              key={feed.id}/>)

    return (
        <ListFeedDiv>
            {ListFeeds}
        </ListFeedDiv>
    )
}
export default ListFeed