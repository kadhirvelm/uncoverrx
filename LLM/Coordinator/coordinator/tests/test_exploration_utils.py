import arrow
from django.test import TestCase
from library import exploration_utils, models

exploration_rid = "8410d643-ae84-4668-be69-7f45b8f214e8"
query_request_rid_base = "2ca4ebac-be2b-4e49-903e-7fe26a02408"


class ExplorationUtilsTestCase(TestCase):
    def setUp(self) -> None:
        exploration = models.Exploration.objects.create(
            exploration_rid=exploration_rid, metadata={}
        )

        query_requests = models.QueryRequest.objects.bulk_create(
            [
                models.QueryRequest(
                    query_request_rid=query_request_rid_base + "0",
                    status="unknown",
                    input={},
                    request_date=arrow.utcnow().format(),
                ),
                models.QueryRequest(
                    query_request_rid=query_request_rid_base + "1",
                    status="unknown",
                    input={},
                    request_date=arrow.utcnow().format(),
                ),
                models.QueryRequest(
                    query_request_rid=query_request_rid_base + "2",
                    status="unknown",
                    input={},
                    request_date=arrow.utcnow().format(),
                ),
                models.QueryRequest(
                    query_request_rid=query_request_rid_base + "3",
                    status="unknown",
                    input={},
                    request_date=arrow.utcnow().format(),
                ),
            ]
        )

        models.ExplorationXQueryRequest.objects.bulk_create(
            [
                models.ExplorationXQueryRequest(
                    exploration_x_query_request_id=index,
                    exploration_rid=exploration,
                    query_request_rid=query_request,
                    position=str(index),
                )
                for index, query_request in enumerate(query_requests)
            ]
        )

        return super().setUp()

    def test_simple_exploration(self):
        all_previous_entries = exploration_utils.get_all_previous_query_requests(
            query_request_rid_base + "0"
        )

        self.assertEqual(len(all_previous_entries), 1)
        self.assertEqual(
            str(all_previous_entries[0].query_request_rid), query_request_rid_base + "0"
        )

    def test_exploration_mid(self):
        all_previous_entries = exploration_utils.get_all_previous_query_requests(
            query_request_rid_base + "1"
        )

        self.assertEqual(len(all_previous_entries), 2)
        self.assertEqual(
            str(all_previous_entries[0].query_request_rid), query_request_rid_base + "0"
        )
        self.assertEqual(
            str(all_previous_entries[1].query_request_rid), query_request_rid_base + "1"
        )

    def test_exploration_end(self):
        all_previous_entries = exploration_utils.get_all_previous_query_requests(
            query_request_rid_base + "3"
        )

        self.assertEqual(len(all_previous_entries), 4)
        self.assertEqual(
            str(all_previous_entries[0].query_request_rid), query_request_rid_base + "0"
        )
        self.assertEqual(
            str(all_previous_entries[1].query_request_rid), query_request_rid_base + "1"
        )
        self.assertEqual(
            str(all_previous_entries[2].query_request_rid), query_request_rid_base + "2"
        )
        self.assertEqual(
            str(all_previous_entries[3].query_request_rid), query_request_rid_base + "3"
        )
