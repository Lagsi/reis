import Link from "next/link"

const footer = () => {
    return (
        <footer>
            <p className="text-left leading-3 text-sm ml-2 text-zinc-600">
                Design by{" "}
                <Link
                    className="leading-3 line-through"
                    href={"https://github.com/JeppeHauman"}
                >
                    J
                </Link>{" "}
                &{" "}
                <Link
                    className="leading-3 line-through"
                    href={"https://github.com/n13a"}
                >
                    N
                </Link>
            </p>
        </footer>
    )
}
export default footer