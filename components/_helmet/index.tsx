import Helmet from 'react-helmet';

export function HelmetComponent() {
    return (
        <Helmet>
            <title>Gustavo Hoppe Workout</title>

            <link rel="icon" href="/favicon.ico"/>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
            <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

            <body className="bg-light-primary dark:bg-dark-primary"></body>
        </Helmet>
    )
}
