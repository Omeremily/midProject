import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Row, Col } from "react-bootstrap";
import { ItemContext } from "../context/ItemContext";
import { useContext, useEffect, useState } from "react";
import { StoreItemProps } from "../types/storeTypes";
import SpecificItem from "../components/specificItem";
import '../css/Store.css';

export default function Store() {
    const { items } = useContext<any>(ItemContext);
    const [itemsToShow, setItemsToShow] = useState<StoreItemProps[]>([]);
    const [search, setSearch] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

    {/* פונקצית מיון לפי מחיר - asc/desc */}
    useEffect(() => {
      let sortedItems = [...items];
      if (sortOrder === 'asc') {
          sortedItems.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
      } else if (sortOrder === 'desc') {
          sortedItems.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
      }
      setItemsToShow(sortedItems);
    }, [sortOrder]);
  
    {/* פונקצית סינון קטגוריית מוצר + חיפוש בדף בהתאם לסינון */}
    useEffect(() => {
        if (search === '' && !categoryFilter) {
            setItemsToShow(items);
        } else {
            let filteredItems = items.filter((item: StoreItemProps) => {
                const nameMatches = item.name?.toLowerCase().includes(search);
                const shortDescMatches = item.shortDescription?.toLowerCase().includes(search);
                const categoryMatches = item.shortDescription?.toLowerCase() === categoryFilter.toLowerCase();
                return (nameMatches || shortDescMatches) && (!categoryFilter || categoryMatches);
            });
            setItemsToShow(filteredItems);
        }
    }, [search, categoryFilter, items]);

    return (
        <>
            <NavBar />
            <h1>Store</h1>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                        className="searchBar"
                        placeholder="Search..."
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{ 
                            marginLeft: '0.5rem',
                            padding: '0.5rem',
                            borderRadius: '4px',
                            backgroundColor: 'white',
                            border: '1px solid #ced4da'
                        }}
                    />
                    <select 
                        value={sortOrder} 
                        onChange={(e) => { setSortOrder(e.target.value); }}
                        style={{ 
                            marginLeft: '0.5rem',
                            padding: '0.5rem',
                            borderRadius: '4px',
                            border: '1px solid #ced4da'
                        }}
                    >
                        <option value="">Sort By: (unsorted)</option>
                        <option value="asc">Sort By: Low to High</option>
                        <option value="desc">Sort By: High to Low</option>
                    </select>
                    <select 
                        value={categoryFilter} 
                        onChange={(e) => { setCategoryFilter(e.target.value); }}
                        style={{ 
                            marginLeft: '0.5rem',
                            padding: '0.5rem',
                            borderRadius: '4px',
                            border: '1px solid #ced4da'
                        }}
                    >
                        <option value="">All Categories</option>
                        <option value="Fitness equipment">Fitness equipment</option>
                        <option value="Vitamins">Vitamins</option>
                        <option value="Drinks">Drinks</option>
                        <option value="Powders">Powders</option>
                        <option value="Bags">Bags</option>
                    </select>
                </div>
            </div>
            <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4 mx-auto">
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
