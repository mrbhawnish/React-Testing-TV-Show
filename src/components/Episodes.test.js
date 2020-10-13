import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

test("episodes api data is rendered once the component rerenders",() => {
     // Arrange: simulate the behavior of rendering this component to the page, before making an api call
    const { queryAllByTestId, getAllByTestId, rerender } = render(<Episodes episodes={[]}/>)
    // sanity check: make sure that there are no episodes yet when the component mounts
    const initialShows = queryAllByTestId(/show/i);
    expect(initialShows).toHaveLength(0)
    expect(initialShows).toEqual([]);
   // Act: re-render the component with episodes data
      rerender(<Episodes episodes={data} />)
      const shows = getAllByTestId(/show/i);
      //Assert: 1 show should render to the page
      expect(shows).toHaveLength(1);
})


const data = [
        {
            "id": 553946,
            "url": "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
            "name": "Chapter One: The Vanishing of Will Byers",
            "season": 1,
            "number": 1,
            "airdate": "2016-07-15",
            "airtime": "",
            "airstamp": "2016-07-15T12:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
                "original": "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
            },
            "summary": "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
            "_links": {
                "self": {
                    "href": "http://api.tvmaze.com/episodes/553946"
                }
            }
        }
    ]
