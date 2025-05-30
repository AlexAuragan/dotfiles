from _typeshed import Incomplete

from influxdb_client.domain.create_dashboard_request import CreateDashboardRequest

class Dashboard(CreateDashboardRequest):
    openapi_types: Incomplete
    attribute_map: Incomplete
    discriminator: Incomplete
    def __init__(
        self,
        links: Incomplete | None = None,
        id: Incomplete | None = None,
        meta: Incomplete | None = None,
        cells: Incomplete | None = None,
        labels: Incomplete | None = None,
        org_id: Incomplete | None = None,
        name: Incomplete | None = None,
        description: Incomplete | None = None,
    ) -> None: ...
    @property
    def links(self): ...
    @links.setter
    def links(self, links) -> None: ...
    @property
    def id(self): ...
    @id.setter
    def id(self, id) -> None: ...
    @property
    def meta(self): ...
    @meta.setter
    def meta(self, meta) -> None: ...
    @property
    def cells(self): ...
    @cells.setter
    def cells(self, cells) -> None: ...
    @property
    def labels(self): ...
    @labels.setter
    def labels(self, labels) -> None: ...
    def to_dict(self): ...
    def to_str(self): ...
    def __eq__(self, other): ...
    def __ne__(self, other): ...
