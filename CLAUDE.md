## Project Overview (概要)

本プロジェクトは、Reactを使ったポケモン図鑑WEBアプリケーションです。
表示する情報はすべてPokeAPIで取得します。
APIサーバやDBサーバはなく、フロントエンドだけで完結する設計になっています。

## Technology Stack (技術スタック)

- React 19.2.4
- React Compiler（babel-plugin-react-compiler 導入済み）
- TailwindCSS 4
- Vite

## Code Style（コード規約・スタイル）

- React19、TailwindCSS のベストプラクティスに沿った記述をしてください。
- PokeAPIの仕様については、PokeAPIの公式ドキュメントを参考にしてください。
- 変数名、関数名、ディレクトリ名、ファイル名はキャメルケースにしてください。
- any 型の使用は原則として禁止します。
- 関数には必ず JSDoc 形式のコメントを付けてください。
- 可読性を極限まで高めてください。
- React Compiler を導入済みのため、メモ化は基本的にコンパイラへ任せてください。useMemo / useCallback / React.memo を使う際は「本当に必要か」を都度吟味し、明確な理由がある場合のみ使用してください。

## NEVER (絶対にやらないこと)

- node_modules/ などの git 追跡外ディレクトリを直接編集しないでください。

## Other (その他)

- チャットは日本語で回答してください。
- ソースコードを変更する前に、必ず変更の差分を提示して、ユーザーの承認を得るようにしてください。
