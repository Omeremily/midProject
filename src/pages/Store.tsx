import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"
import { Row, Col } from "react-bootstrap"
import { ItemContext } from "../context/ItemContext"
import { useContext, useEffect, useState } from "react"
import { StoreItemProps } from "../types/storeTypes"
import SpecificItem from "../components/specificItem"
import '../css/Store.css'

export default function Store() {

    const { items } = useContext<any>(ItemContext);
    const [itemsToShow, setItemsToShow] = useState<StoreItemProps[]>([]);
    const [search, setSearch] = useState<string>("");

    function sortByPrice(lowToHigh: boolean) {
      if (lowToHigh) {
        setItemsToShow([...itemsToShow.sort((a, b) => (a.price ?? 0) - (b.price ?? 0))]);
      } else {
        setItemsToShow([...itemsToShow.sort((a, b) => (b.price ?? 0) - (a.price ?? 0))]);
      }
    }

    useEffect(() => {
      if (search === '') {
        setItemsToShow(items);
      } else {
        setItemsToShow(items.filter((item: StoreItemProps) => item.name?.toLowerCase().includes(search)))
      }
    }, [search, items])

    return (
      <>
        <NavBar />
        <h1>Store</h1>
        <div style={{ display: "flex", justifyContent: "left" }}>
          <input className="searchBar" 
            placeholder="Search..."
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ margin: '0', marginRight: '0.5rem' }}>sort: </p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button onClick={() => sortByPrice(true)} style={{ marginRight: '0.5rem', padding: '0.5rem' }}>
                <i className="fas fa-arrow-down"></i>
              </button>
              <button onClick={() => sortByPrice(false)} style={{ padding: '0.5rem' }}>
                <i className="fas fa-arrow-up"></i>
              </button>
            </div>
          </div>
        </div>
        <Row md={2} xs={1} lg={3} className="g-3">
          {itemsToShow.map((item: StoreItemProps) => (
            <Col key={item.id}>
              <Link className="text-decoration-none" to={`/item/${item.id}`}>
                <SpecificItem {...item} />
              </Link>
            </Col>
          ))}
        </Row>
      </>
    );
  }


