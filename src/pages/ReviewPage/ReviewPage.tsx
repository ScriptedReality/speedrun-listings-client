import { useState, FormEvent } from "react";

export default function ReviewPage() {

  type Review = {
    username: string;
    description: string;
  }

  const [username, setUsername] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [reviewList, setReviewList] = useState<Review[]>([]);

  function submitReview(event: FormEvent) {

    // Prevent the page from refreshing.
    event.preventDefault();

    // Add the review to the list.
    setReviewList([...reviewList, {username, description}]);
    setUsername("");
    setDescription("");

  }
  
  return (
    <main>
      <form onSubmit={(event) => submitReview(event)}>
        <section>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        </section>
        <section>
          <label htmlFor="description">Description</label>
          <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
        </section>
        <button type="submit">Submit</button>
      </form>
    </main>
  );

}