import codecs
import sys
import threading
from _typeshed import SupportsFlush, SupportsWrite, Unused
from collections.abc import Iterable
from typing import Any, Protocol, TypeVar, type_check_only
from typing_extensions import Self

from serial import Serial

_AnyStrT_contra = TypeVar("_AnyStrT_contra", contravariant=True)

@type_check_only
class _SupportsWriteAndFlush(SupportsWrite[_AnyStrT_contra], SupportsFlush, Protocol): ...

@type_check_only
class _SupportsRead(Protocol):
    def read(self, n: int, /) -> str: ...

def key_description(character: str) -> str: ...

class ConsoleBase:
    byte_output: _SupportsWriteAndFlush[bytes]
    output: _SupportsWriteAndFlush[str]
    def __init__(self) -> None: ...
    def setup(self) -> None: ...
    def cleanup(self) -> None: ...
    def getkey(self) -> None: ...
    def write_bytes(self, byte_string: bytes) -> None: ...
    def write(self, text: str) -> None: ...
    def cancel(self) -> None: ...
    def __enter__(self) -> Self: ...
    def __exit__(self, *args: Unused, **kwargs: Unused) -> None: ...

if sys.platform == "win32":
    class Out:
        fd: int
        def __init__(self, fd: int) -> None: ...
        def flush(self) -> None: ...
        def write(self, s: bytes) -> None: ...

    class Console(ConsoleBase):
        fncodes: dict[str, str]
        navcodes: dict[str, str]
        def __del__(self) -> None: ...

else:
    class Console(ConsoleBase):
        fd: int
        old: list[Any]  # return type of termios.tcgetattr()
        enc_stdin: _SupportsRead

class Transform:
    def rx(self, text: str) -> str: ...
    def tx(self, text: str) -> str: ...
    def echo(self, text: str) -> str: ...

class CRLF(Transform): ...
class CR(Transform): ...
class LF(Transform): ...

class NoTerminal(Transform):
    REPLACEMENT_MAP: dict[int, int]

class NoControls(NoTerminal):
    REPLACEMENT_MAP: dict[int, int]

class Printable(Transform): ...

class Colorize(Transform):
    input_color: str
    echo_color: str

class DebugIO(Transform): ...

EOL_TRANSFORMATIONS: dict[str, type[Transform]]
TRANSFORMATIONS: dict[str, type[Transform]]

def ask_for_port() -> str: ...

class Miniterm:
    console: Console
    serial: Serial
    echo: bool
    raw: bool
    input_encoding: str
    output_encoding: str
    eol: str
    filters: Iterable[str]
    exit_character: str
    menu_character: str
    alive: bool | None
    receiver_thread: threading.Thread | None
    rx_decoder: codecs.IncrementalDecoder | None
    tx_decoder: codecs.IncrementalDecoder | None
    tx_encoder: codecs.IncrementalEncoder | None
    def __init__(self, serial_instance: Serial, echo: bool = False, eol: str = "crlf", filters: Iterable[str] = ()) -> None: ...
    transmitter_thread: threading.Thread
    def start(self) -> None: ...
    def stop(self) -> None: ...
    def join(self, transmit_only: bool = False) -> None: ...
    def close(self) -> None: ...
    tx_transformations: list[Transform]
    rx_transformations: list[Transform]
    def update_transformations(self) -> None: ...
    def set_rx_encoding(self, encoding: str, errors: str = "replace") -> None: ...
    def set_tx_encoding(self, encoding: str, errors: str = "replace") -> None: ...
    def dump_port_settings(self) -> None: ...
    def reader(self) -> None: ...
    def writer(self) -> None: ...
    def handle_menu_key(self, c: str) -> None: ...
    def upload_file(self) -> None: ...
    def change_filter(self) -> None: ...
    def change_encoding(self) -> None: ...
    def change_baudrate(self) -> None: ...
    def change_port(self) -> None: ...
    def suspend_port(self) -> None: ...
    def get_help_text(self) -> str: ...

def main(
    default_port: str | None = None, default_baudrate: int = 9600, default_rts: int | None = None, default_dtr: int | None = None
) -> None: ...
