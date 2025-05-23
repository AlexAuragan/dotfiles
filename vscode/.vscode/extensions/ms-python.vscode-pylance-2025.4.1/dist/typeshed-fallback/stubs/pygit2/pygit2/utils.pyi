import contextlib
import types
from _typeshed import StrOrBytesPath, StrPath
from collections.abc import Generator
from typing import Generic, TypeVar
from typing_extensions import TypeAlias

from _cffi_backend import _CDataBase

def maybe_string(ptr: _CDataBase) -> str | None: ...
def to_bytes(s: _CDataBase | StrOrBytesPath | None, encoding: str = "utf-8", errors: str = "strict") -> _CDataBase | bytes: ...
def to_str(s: StrOrBytesPath) -> str: ...
def ptr_to_bytes(ptr_cdata: _CDataBase) -> bytes: ...
@contextlib.contextmanager
def new_git_strarray() -> Generator[_GitStrArray]: ...
def strarray_to_strings(arr: _GitStrArray) -> list[str]: ...

# Actual type: _cffi_backend.__CDataOwn <cdata 'struct git_strarray *'>
# This is not a real subclassing. Just ensuring type-checkers sees this type as compatible with _CDataBase
# pyright has no error code for subclassing final
class _GitStrArray(_CDataBase):  # type: ignore[misc]  # pyright: ignore[reportGeneralTypeIssues]
    count: int
    strings: _CDataBase  # <cdata 'char * *'>

_IntoStrArray: TypeAlias = list[StrPath] | tuple[StrPath] | None

class StrArray:
    def __init__(self, l: _IntoStrArray) -> None: ...
    def __enter__(self) -> _CDataBase: ...
    def __exit__(
        self, type: type[BaseException] | None, value: BaseException | None, traceback: types.TracebackType | None
    ) -> None: ...
    @property
    def ptr(self) -> _CDataBase | _GitStrArray: ...
    def assign_to(self, git_strarray: _GitStrArray) -> None: ...

_T = TypeVar("_T")

class _GenericContainer(Generic[_T]):
    def __len__(self) -> int: ...
    def __getitem__(self, idx: int) -> _T: ...

class GenericIterator(Generic[_T]):
    container: _GenericContainer[_T]
    length: int
    idx: int
    def __init__(self, container: _GenericContainer[_T]) -> None: ...
    def next(self) -> _T: ...
    def __next__(self) -> _T: ...
