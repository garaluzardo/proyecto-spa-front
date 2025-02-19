import './NotFound.css';
import LikeButton from '../../components/Buttons/LikeButton/LikeButton';
import RatingStars from '../../components/RatingStars/RatingStars';
import AddButton from '../../components/Buttons/AddButton/AddButton';
import DeleteButton from '../../components/Buttons/DeleteButton/DeleteButton';
import UpdateButton from '../../components/Buttons/UpdateButton/UpdateButton';

function NotFound() {
    return (
        <div className="page">
            <div className="not-found-page">
                <h1>404</h1>
                <p>Oops! The page you are looking for does not exist.</p>
                <LikeButton />
                <RatingStars />
                <AddButton />
                <DeleteButton />
                <UpdateButton />
            </div>
        </div>
    );
}

export default NotFound;
