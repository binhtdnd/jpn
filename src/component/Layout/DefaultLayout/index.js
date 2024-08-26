import Header from "../Items/Header";


function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="root">
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;