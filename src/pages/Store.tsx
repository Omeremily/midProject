import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Row, Col } from "react-bootstrap";
import { ItemContext } from "../context/ItemContext";
import { useContext, useEffect, useState } from "react";
import { StoreItemProps } from "../types/storeTypes";
import SpecificItem from "../components/specificItem";
import '../css/Store.css';
import '../css/Video.css';
import Footer from "../components/Footer";
import VideoHero from "../components/VideoHero";

//פונקציות בדף חנות
export default function Store() {
    // מערך מוצרים בדף החנות שימוש ביוז-קונטקסט
    const { items } = useContext<any>(ItemContext);
    // 
    const [itemsToShow, setItemsToShow] = useState<StoreItemProps[]>([]);
    const [search, setSearch] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

    {/* פונקצית מיון לפי מחיר - asc/desc 
    תפעל כל פעם מחדש לפי מצב המיון הנתון*/}
    useEffect(() => {
        let sortedItems = [...items];
        // אם נבחרה אופציה זו יש למיין מנמוך לגבוה
        if (sortOrder === 'asc') {
            sortedItems.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
        // אם נבחרה אופציה זו יש למיין מגבוה לנמוך
        } else if (sortOrder === 'desc') {
            sortedItems.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
        }   
        setItemsToShow(sortedItems);
    }, [sortOrder]);
  
    {/* פונקצית סינון קטגוריית מוצר + חיפוש בדף בהתאם לסינון 
        תפעל כל פעם מחדש לפי מצב הסינון הנתון*/}
    useEffect(() => {
        // אם לא הוקלד טקסט בחיפוש ואין פילטור קטגוריות תגדיר מצב התחלתי
        if (search === '' && !categoryFilter) {
            setItemsToShow(items);
        // הפעלת פלטור לפי שם המוצר או קטגוריית מוצר
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
            {/* נאב-בר */}
            <NavBar />

            {/* וידאו סקשיין */}
            <div id="hero">
                <VideoHero src={"../../public/imgs/Video.mp4"} />
            </div>

            <Row className="mx-auto mt-3">

                {/* שדה חיפוש */}
                <Col xs={12} md={6} className="mb-3">
                    <div className="d-flex align-items-center">
                        <input
                            className="form-control"
                            placeholder="Search..."
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </Col>

                {/* שדה מיון לפי מחיר */}
                <Col xs={12} md={3} className="mb-3">
                    <select 
                        className="form-select"
                        value={sortOrder} 
                        onChange={(e) => { setSortOrder(e.target.value); }}
                    >
                        <option value="">Sort By: (unsorted)</option>
                        <option value="asc">Sort By: Low to High</option>
                        <option value="desc">Sort By: High to Low</option>
                    </select>
                </Col>

                {/* שדה סינון לפי קטגוריית מוצר */}
                <Col xs={12} md={3} className="mb-3">
                    <select 
                        className="form-select"
                        value={categoryFilter} 
                        onChange={(e) => { setCategoryFilter(e.target.value); }}
                    >
                        <option value="">All Categories</option>
                        <option value="Vitamins">Vitamins</option>
                        <option value="Drinks">Drinks</option>
                        <option value="Powders">Powders</option>
                        <option value="Fitness equipment">Fitness equipment</option>
                        <option value="Bags">Bags</option>
                    </select>
                </Col>

            </Row>

            {/* תצוגת כל המוצרים בחנות עם מעבר דינאמי לדפי המוצר */}
            <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4 mx-auto">
                {itemsToShow.map((item: StoreItemProps) => (
                    <Col key={item.id}>
                        <Link className="text-decoration-none" to={`/item/${item.id}`}>
                            <SpecificItem {...item} />
                        </Link>
                    </Col>
                ))}
            </Row>

            {/* פוטר */}
            <Footer />
        </>
    );
}    