from _typeshed import Incomplete

from win32comext.axdebug import gateways

class EnumDebugStackFrames(gateways.EnumDebugStackFrames):
    def __init__(self, debugger) -> None: ...
    def Next(self, count): ...

class DebugStackFrame(gateways.DebugStackFrame):
    frame: Incomplete
    lineno: Incomplete
    codeContainer: Incomplete
    expressionContext: Incomplete
    def __init__(self, frame, lineno, codeContainer) -> None: ...
    def GetThread(self) -> None: ...
    def GetCodeContext(self): ...
    def GetDescriptionString(self, fLong): ...
    def GetLanguageString(self, fLong): ...  # type: ignore[override]
    def GetDebugProperty(self): ...

class DebugStackFrameSniffer:
    debugger: Incomplete
    def __init__(self, debugger) -> None: ...
    def EnumStackFrames(self): ...

class StackFrameDebugProperty:
    frame: Incomplete
    def __init__(self, frame) -> None: ...
    def GetPropertyInfo(self, dwFieldSpec, nRadix) -> None: ...
    def GetExtendedInfo(self) -> None: ...
    def SetValueAsString(self, value, radix) -> None: ...
    def EnumMembers(self, dwFieldSpec, nRadix, iid): ...
    def GetParent(self) -> None: ...
