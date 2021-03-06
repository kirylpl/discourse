/*jshint maxlen:10000000 */
import { NOTIFICATION_TYPES } from "fixtures/concerns/notification-types";

export default {
  "/notifications": {
    notifications: [
      {
        id: 123,
        notification_type: NOTIFICATION_TYPES.replied,
        read: false,
        post_number: 2,
        topic_id: 1234,
        slug: "a-slug",
        data: { topic_title: "some title", display_username: "velesin" }
      },
      {
        id: 456,
        notification_type: NOTIFICATION_TYPES.liked_consolidated,
        read: false,
        data: { display_username: "aquaman", count: "5" }
      }
    ]
  }
};
