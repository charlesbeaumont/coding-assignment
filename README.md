## Assignment

Within TheyDo you can manage Solutions for your organization. It could be a landing page to help customers choose the right product, a chat service for better customer support, basically anything that would help your organization solve a problem.

These Solutions may already be implemented, they could be on the backlog or maybe there's a team working on them right now. In other words, they have a certain status.

One of the most requested features of our clients is integrating it with project/product management platforms, like Jira, DevOps or Trello. These platforms usually work with tasks or stories, tracking the progress. This means tasks in these externals platforms also have a status.

We want the integration to sync Solutions to tasks in the external platforms and display the external statuses connected to tasks in TheyDo, seperately from the TheyDo status. We also want to map external statuses to TheyDo statuses so that if a status in the external platform is updated, the TheyDo status will also be updated.

Your assignment is to design an architecture to accomplish this, based on the current setup in 'db'. Then, write a field resolver that exposes the external statuses of a Solution.

Keep in mind that we don't want to restrict the architecture to a single integration; we want to implement many integrations and each Solution could be linked none or any of the integrations. For example;
- Solution A <> Jira
- Solution B <> Trello
- Solution C <> Jira and Trello
- Solution D <> Jira
- Solution E <> None

In the 'third-party' folder there's some examples of data structures on which you can base your implementation.

You can find an example of a Journey here: https://app.theydo.io/s/b2647073-af7c-4223-a1cb-e88bc1145921.
